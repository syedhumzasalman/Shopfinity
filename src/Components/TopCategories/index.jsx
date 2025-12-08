import axios from "axios";
import TopCategoriesCard from '../TopCategoriesCard';

const TopCategories = () => {


    const categories = [
      "Men's clothing",
      "Jewelery",
      "Electronics",
      "Women's clothing",
    ];

    const images = [
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYYSK7JekthJYEJo7zHU8Tochlqc8RiapZQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGpjLP9sAzw3vDeUmhx7CQZxJAn1wUmxLhw&s",
      "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    ];
  


  return (
    <>

      <h1 className='text-center font-extrabold text-3xl mt-10 mb-10'>Top Categories</h1>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 px-4'>
        {categories.map((cat, index) => (
          <TopCategoriesCard
            key={index}
            category={cat}
            image={images[index]}
          />
        ))}
      </div >


    </>
  )
}

export default TopCategories