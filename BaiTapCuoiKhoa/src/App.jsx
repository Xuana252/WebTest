import { useState } from "react";
import Gallery from "./components/Gallery";
import CategoriesBox from "./components/CategoriesBox";
import SearchBar from "./components/SearchBar";
import image1 from "./assets/Photos/DogEatSausageInSpace.png"
import image2 from "./assets/Photos/Kitchen.png"
import image3 from "./assets/Photos/Lion.png"
import image4 from "./assets/Photos/FamilyVacation.png"
import image5 from "./assets/Photos/Nature.png"
import image6 from "./assets/Photos/Books.png"
import image7 from "./assets/Photos/Dog.png"
import image8 from "./assets/Photos/LightHouse.png"
import image9 from "./assets/Photos/Pizza.png"


function App() {
  const [searchText,setSearchText] = useState('')
  const photos = [
    { id: 1, source: image4, title: 'Family vacation', categories: ['Traveling'] },
    { id: 2, source: image2, title: 'My kitchen', categories: ['Food'] },
    { id: 3, source: image3, title: 'Lion king', categories: ['Animal'] },
    { id: 4, source: image1, title: 'AI dog', categories: ['Animal', 'Cosmic', 'Food'] },
    { id: 5, source: image5, title: 'Nature beauty', categories: ['Nature'] },
    { id: 6, source: image8, title: 'Light house', categories: ['Nature'] },
    { id: 7, source: image9, title: 'Pizza', categories: ['Food'] },
    { id: 8, source: image1, title: 'AI dog', categories: ['Animal', 'Cosmic', 'Food'] },
    { id: 9, source: image6, title: 'Just books', categories: ['Study'] },
    { id: 10, source: image7, title: 'Big ear dog', categories: ['Animal'] },
    { id: 11, source: image4, title: 'Family vacation', categories: ['Traveling'] },
    { id: 12, source: image8, title: 'Light house', categories: ['Nature'] },
    { id: 13, source: image5, title: 'Nature beauty', categories: ['Nature'] },
    { id: 14, source: image2, title: 'My kitchen', categories: ['Food'] },
    { id: 15, source: image8, title: 'Light house', categories: ['Nature'] },
    { id: 16, source: image3, title: 'Lion king', categories: ['Animal'] },
    { id: 17, source: image6, title: 'Just books', categories: ['Study'] },
  ]
  const [categories, setCategories] = useState([
    {id:1,name: 'Food',state: false},
    {id:2,name: 'Animal',state: false},
    {id:3,name: 'Study',state: false},
    {id:4,name: 'Nature',state: false},
    {id:5,name: 'Traveling',state: false},
    {id:6,name: 'Cosmic',state: false}
  ]) 

  const handleCategoryStateChange = (cateIdToChange) => {
    const updatedCategories = categories.map(category=>{
      if (category.id === cateIdToChange)
        return {...category,state:!category.state}
      return category
    })

    setCategories(updatedCategories)
  } 
  
  const handleSearching= (textToSearch) => {
    const finalText = textToSearch.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    setSearchText(finalText)
  }

  const selectedCate = categories.filter(category => {
    return category.state
  })

  const filteredPhotos = photos.filter(photo => {
    const photoTitle = photo.title.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return (photoTitle.includes(searchText) || searchText === '')&&selectedCate.every(cate => photo.categories.includes(cate.name));
  });
  console.log(searchText)

  return (
    <div className="size-full grid grid-cols-1 grid-rows-myGrid justify-items-center gap-4 p-4">
      <h1 className="p-2 size-fit text-title font-title leading-title">Gallery</h1>
      <SearchBar onTextChange={handleSearching}/>
      <CategoriesBox categories={categories} onCateStateChange={handleCategoryStateChange}/>
      <Gallery photos={filteredPhotos} />
    </div>
  );
}

export default App;
