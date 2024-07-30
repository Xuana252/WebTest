import { useEffect, useState, Suspense, lazy } from "react";

const Menu = lazy(() => import("./components/Menu"));
const Gallery = lazy(() => import("./components/Gallery"));
function App() {
  const [searchText, setSearchText] = useState("");
  const [theme, setTheme] = useState("black");
  const themes = [
    "light",
    "dark",
    "theme3",
    "theme4",
    "theme5",
    "theme6",
    "theme7",
    "theme8",
    "theme9",
    "theme10",
  ];
  const photos = [
    {
      id: 1,
      source:
        "https://images.healthshots.com/healthshots/en/uploads/2022/09/07225829/family-vacation-1600x900.jpg",
      title: "Family vacation",
      categories: ["Traveling"],
    },
    {
      id: 2,
      source:
        "https://hips.hearstapps.com/hmg-prod/images/rheinstein-schafer-newport-beach-house-kitchen-6489d4d251f5d.jpg?crop=1.00xw:0.836xh;0,0&resize=1200:*",
      title: "My kitchen",
      categories: ["Food"],
    },
    {
      id: 3,
      source:
        "https://cdn.pixabay.com/photo/2022/08/13/09/05/lion-7383228_640.jpg",
      title: "Lion king",
      categories: ["Animal"],
    },
    {
      id: 4,
      source:
      "https://www.kenduncan.com/wp-content/uploads/1970/01/VX1182.jpg",
    title: "Light House",
    categories: ["Nature"],
    },
    {
      id: 5,
      source:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrvE85eW9nMQbakX11jPL2XybGmNTIlhnKw&s",
      title: "Nature beauty",
      categories: ["Nature"],
    },
    {
      id: 6,
      source:
        "https://i.pinimg.com/originals/33/30/e2/3330e26cfd9d0ecb277639737c62e075.jpg",
      title: "Light house",
      categories: ["Nature"],
    },
    {
      id: 7,
      source:
        "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      title: "Pizza",
      categories: ["Food"],
    },
    {
      id: 8,
      source:
        "https://mybackdrop.co.uk/wp-content/uploads/2017/06/space-galaxy.jpg",
      title: "the universe",
      categories: ["Cosmic"],
    },
    {
      id: 9,
      source:
        "https://media.istockphoto.com/id/1181242927/photo/chic-diva-dog-in-autumn-or-fall-windy.jpg?s=612x612&w=0&k=20&c=sSSKZ_5GA5h5shirUxqu_lWQEebAnnVWJhQQA7V11YI=",
      title: "Slay dog",
      categories: ["Fashion", "Animal"],
    },
    {
      id: 10,
      source:
        "https://static1.squarespace.com/static/56b1148fe707ebac7ac5d685/56b1152ad51cd4a1a6e557cf/6248d249a4c9a44f31a13ccd/1665875165612/studying-ahead-1421056.jpg?format=1500w",
      title: "Learning",
      categories: ["Study"],
    },
    {
      id: 11,
      source:
        "https://www.wakefit.co/blog/wp-content/uploads/2022/01/Notes-min.jpg",
      title: "Work and Learn",
      categories: ["Study"],
    },
    {
      id: 12,
      source:
        "https://media.cnn.com/api/v1/images/stellar/prod/210104133055-beginner-gaming-pc.jpg?q=w_1110,c_fill",
      title: "Gamer",
      categories: ["Gaming"],
    },
    {
      id: 13,
      source:
        "https://assets.publishing.service.gov.uk/media/6448efd1529eda000c3b046d/gaming-pic.jpg",
      title: "Gaming setup",
      categories: ["Gaming"],
    },
    {
      id: 14,
      source:
        "https://th-thumbnailer.cdn-si-edu.com/vjH0v85nPfP7aewZQ9Mg10uN7Lk=/1072x720/filters:no_upscale():focal(634x383:635x384)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/3d/e0/3de096a2-5f45-45bb-8332-27a70ad02aff/beethoven_portrait.jpg",
      title: "Bethoven",
      categories: ["Music"],
    },
    {
      id: 15,
      source:
        "https://images.healthshots.com/healthshots/en/uploads/2022/09/07225829/family-vacation-1600x900.jpg",
      title: "Family vacation",
      categories: ["Traveling"],
    },
    {
      id: 16,
      source: "https://www.kenduncan.com/wp-content/uploads/1970/01/VX1182.jpg",
      title: "Light House",
      categories: ["Nature"],
    },
    {
      id: 17,
      source:
        "https://cdn.pixabay.com/photo/2022/08/13/09/05/lion-7383228_640.jpg",
      title: "Lion king",
      categories: ["Animal"],
    },
    {
      id: 18,
      source:
        "https://img.freepik.com/free-photo/3d-rendering-robotic-dog_23-2150780822.jpg",
      title: "AI dog",
      categories: ["Animal"],
    },
    {
      id: 19,
      source:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrvE85eW9nMQbakX11jPL2XybGmNTIlhnKw&s",
      title: "Nature beauty",
      categories: ["Nature"],
    },
    {
      id: 20,
      source:
        "https://i.pinimg.com/originals/33/30/e2/3330e26cfd9d0ecb277639737c62e075.jpg",
      title: "Light house",
      categories: ["Nature"],
    },
    {
      id: 21,
      source:
        "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      title: "Pizza",
      categories: ["Food"],
    },
    {
      id: 22,
      source:
        "https://mybackdrop.co.uk/wp-content/uploads/2017/06/space-galaxy.jpg",
      title: "the universe",
      categories: ["Cosmic"],
    },
    {
      id: 23,
      source:
        "https://media.istockphoto.com/id/1181242927/photo/chic-diva-dog-in-autumn-or-fall-windy.jpg?s=612x612&w=0&k=20&c=sSSKZ_5GA5h5shirUxqu_lWQEebAnnVWJhQQA7V11YI=",
      title: "Slay dog",
      categories: ["Fashion", "Animal"],
    },
    {
      id: 24,
      source:
        "https://static1.squarespace.com/static/56b1148fe707ebac7ac5d685/56b1152ad51cd4a1a6e557cf/6248d249a4c9a44f31a13ccd/1665875165612/studying-ahead-1421056.jpg?format=1500w",
      title: "Learning",
      categories: ["Study"],
    },
    {
      id: 25,
      source:
        "https://www.wakefit.co/blog/wp-content/uploads/2022/01/Notes-min.jpg",
      title: "Work and Learn",
      categories: ["Study"],
    },
    {
      id: 26,
      source:
        "https://media.cnn.com/api/v1/images/stellar/prod/210104133055-beginner-gaming-pc.jpg?q=w_1110,c_fill",
      title: "Gamer",
      categories: ["Gaming"],
    },
    {
      id: 27,
      source:
        "https://assets.publishing.service.gov.uk/media/6448efd1529eda000c3b046d/gaming-pic.jpg",
      title: "Gaming setup",
      categories: ["Gaming"],
    },
    {
      id: 28,
      source:
        "https://th-thumbnailer.cdn-si-edu.com/vjH0v85nPfP7aewZQ9Mg10uN7Lk=/1072x720/filters:no_upscale():focal(634x383:635x384)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/3d/e0/3de096a2-5f45-45bb-8332-27a70ad02aff/beethoven_portrait.jpg",
      title: "Bethoven",
      categories: ["Music"],
    },
  ];
  const [categories, setCategories] = useState([
    { id: 1, name: "Food", state: false },
    { id: 2, name: "Animal", state: false },
    { id: 3, name: "Study", state: false },
    { id: 4, name: "Nature", state: false },
    { id: 5, name: "Traveling", state: false },
    { id: 6, name: "Cosmic", state: false },
    { id: 7, name: "Fashion", state: false },
    { id: 8, name: "Gaming", state: false },
    { id: 9, name: "Music", state: false },
    { id: 10, name: "Arts", state: false },
    { id: 11, name: "Business", state: false },
  ]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("Theme");
    if (storedTheme !== null) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
  const handleThemeChanging = (theme) => {
    setTheme(theme);
    localStorage.setItem("Theme", theme);
  };

  return (
    <Suspense fallback={<></>}>
      <div className="h-fit gap-4">
        <Gallery photos={filteredPhotos} />
        <Menu
          categories={categories}
          onCateStateChange={handleCategoryStateChange}
          onSearching={handleSearching}
          onThemeChange={handleThemeChanging}
          themes={themes}
        />
      </div>
    </Suspense>
  );
}

export default App;
