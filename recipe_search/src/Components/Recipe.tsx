import axios from "axios";
import React, { useState } from "react";

type RecipeType = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strSource: string;
};

const Recipe = () => {
  const [searchTerm, setSerchTerm] = useState<string>("");
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [visibleRecipes, setVisibleRecipes] = useState<number>(3);

  const handleSearch = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      //   console.log(response);
      setRecipes(response.data.meals ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const showMoreRecipes = () => {
    setVisibleRecipes((prev: number) => prev + 3);
  };

  return (
    <>
      <div className="text-center md:py-28 md:px-44 py-12 px-5 bg-[#1d232a] block fixed top-0 w-full md:static">
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-between gap-5"
        >
          <input
            type="text"
            placeholder="Enter the Recipe name"
            className="md:py-4 md:px-10 flex-1 px-4 py-2 rounded-full outline-none"
            value={searchTerm}
            onChange={(e) => setSerchTerm(e.target.value)}
          />
          <button
            className="bg-[#ff7e00] md:px-8 px-5 py-2 rounded-full text-white text-base md:text-lg cursor-pointer hover:opacity-90"
            type="submit"
          >
            Search
          </button>
        </form>
        <h1 className="mt-12 md:text-5xl text-4xl font-bold bg-gradient-to-r from-[#ff7e00] to-blue-400 bg-clip-text text-transparent">
          Explore Recipes
        </h1>
      </div>

      <section className="md:py-14 bg-slate-50 md:px-20 md:mt-2 pt-72 px-2 pb-8">
        <div className="lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-5">
          {recipes.slice(0, visibleRecipes).map((recipe) => (
            <div
              key={recipe.idMeal}
              className="h-fit p-5 bg-white rounded-md shadow-md"
            >
              <img src={recipe.strMealThumb} alt="" />
              <h2 className="pt-3 text-xl font-bold">{recipe.strMeal}</h2>
              <p className="pt-3 text-xl">{recipe.strCategory}</p>
              <div className=" flex items-center justify-between mt-3">
                <p className="text-xl">{recipe.strArea}</p>
                <p className="text-xl">{recipe.strArea}</p>
              </div>
              <div className=" flex items-center justify-between mt-3">
                <a
                  href={recipe.strSource}
                  target="_blank"
                  className="hover:text-blue-600 text-base text-blue-600"
                >
                  Source
                </a>
                <a
                  href={recipe.strYoutube}
                  target="_blank"
                  className="hover:text-blue-600 text-base text-red-600"
                >
                  View On Youtube
                </a>
              </div>
              <p className="pt-3 text-xl">
                {recipe.strInstructions.slice(0, 100)} ....
              </p>
            </div>
          ))}
        </div>

        {recipes.length > visibleRecipes && (
          <button
            className="px-8 py-3 mt-5 text-white bg-blue-500 rounded-md"
            onClick={showMoreRecipes}
          >
            Show More Recipes
          </button>
        )}
      </section>
    </>
  );
};

export default Recipe;
