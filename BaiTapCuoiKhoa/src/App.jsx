import { useState } from "react";
import Gallery from "./components/Gallery";
import image1 from "./assets/Photos/DogEatSausageInSpace.jpg";
import image2 from "./assets/Photos/Kitchen.jpg";
import image3 from "./assets/Photos/Lion.jpg";
import image4 from "./assets/Photos/FamilyVacation.jpg";
import image5 from "./assets/Photos/Nature.jpg";
import image6 from "./assets/Photos/Books.jpg";
import image7 from "./assets/Photos/Dog.jpg";
import image8 from "./assets/Photos/LightHouse.jpg";
import image9 from "./assets/Photos/Pizza.jpg";
import Menu from "./components/Menu";

function App() {
  const [searchText, setSearchText] = useState("");
  const photos = [
    {
      id: 1,
      source: image4,
      title: "Family vacation",
      categories: ["Traveling"],
    },
    { id: 2, source: image2, title: "My kitchen", categories: ["Food"] },
    { id: 3, source: image3, title: "Lion king", categories: ["Animal"] },
    {
      id: 4,
      source: image1,
      title: "AI dog",
      categories: ["Animal", "Cosmic", "Food"],
    },
    { id: 5, source: image5, title: "Nature beauty", categories: ["Nature"] },
    { id: 6, source: image8, title: "Light house", categories: ["Nature"] },
    { id: 7, source: image9, title: "Pizza", categories: ["Food"] },
    {
      id: 8,
      source: image1,
      title: "AI dog",
      categories: ["Animal", "Cosmic", "Food"],
    },
    { id: 9, source: image6, title: "Just books", categories: ["Study"] },
    { id: 10, source: image7, title: "Big ear dog", categories: ["Animal"] },
    {
      id: 11,
      source: image4,
      title: "Family vacation",
      categories: ["Traveling"],
    },
    { id: 12, source: image8, title: "Light house", categories: ["Nature"] },
    { id: 13, source: image5, title: "Nature beauty", categories: ["Nature"] },
    { id: 14, source: image2, title: "My kitchen", categories: ["Food"] },
    { id: 15, source: image8, title: "Light house", categories: ["Nature"] },
    { id: 16, source: image3, title: "Lion king", categories: ["Animal"] },
    { id: 17, source: image6, title: "Just books", categories: ["Study"] },
    { id: 18, source: image8, title: "Light house", categories: ["Nature"] },
    { id: 19, source: image5, title: "Nature beauty", categories: ["Nature"] },
    { id: 20, source: image2, title: "My kitchen", categories: ["Food"] },
    { id: 21, source: image8, title: "Light house", categories: ["Nature"] },
    { id: 22, source: image3, title: "Lion king", categories: ["Animal"] },
    { id: 23, source: image6, title: "Just books", categories: ["Study"] },
  ];
  const [categories, setCategories] = useState([
    { id: 1, name: "Food", state: false },
    { id: 2, name: "Animal", state: false },
    { id: 3, name: "Study", state: false },
    { id: 4, name: "Nature", state: false },
    { id: 5, name: "Traveling", state: false },
    { id: 6, name: "Cosmic", state: false },
   
  ]);

  const handleCategoryStateChange = (cateIdToChange) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === cateIdToChange)
        return { ...category, state: !category.state };
      return category;
    });

    setCategories(updatedCategories);
  };

  const handleSearching = (textToSearch) => {
    const finalText = textToSearch
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    setSearchText(finalText);
  };

  const selectedCate = categories.filter((category) => {
    return category.state;
  });

  const filteredPhotos = photos.filter((photo) => {
    const photoTitle = photo.title
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    return (
      (photoTitle.includes(searchText) || searchText === "") &&
      selectedCate.every((cate) => photo.categories.includes(cate.name))
    );
  });
  console.log(searchText);

  return (
    <div className="h-fit justify-items-center gap-4  bg-slate-400">
      <Gallery photos={filteredPhotos} />

      <Menu categories={categories} onCateStateChange={handleCategoryStateChange} onSearching={handleSearching}/>
    </div>
  );
}

export default App;
