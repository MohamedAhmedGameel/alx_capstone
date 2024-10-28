import { useDispatch } from 'react-redux';
import { addProduct } from '../rudex/cartSlice';
import { useState } from 'react';


const products = [
  {
    id: 1,
    name: 'Modern Sofa',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlJTIwYmFja2dyb3VuZHxlbnwwfDF8MHx8fDI%3D',
    imageAlt: 'Modern gray sofa in a stylish living room.',
    price: 750,
    color: 'Gray'
  },
  {
    id: 2,
    name: 'Dining Table',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZ1cm5pdHVyZSUyMGJhY2tncm91bmR8ZW58MHwxfDB8fHwy',
    imageAlt: 'Wooden dining table set for a family meal.',
    price: 600,
    color: 'Brown'
  },
  {
    id: 3,
    name: 'Stylish Chair',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Elegant chair in a minimalist setting.',
    price: 150,
    color: 'White'
  },
  {
    id: 4,
    name: 'Bed Frame',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1580152213601-87df3d2c56e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYxfHx8ZW58MHx8fHx8',
    imageAlt: 'King-sized bed frame with cozy bedding.',
    price: 900,
    color: 'Natural Wood'
  },
  {
    id: 5,
    name: 'Bookshelf',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1609081144289-eacc3108cd03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxM3x8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Tall bookshelf filled with books and plants.',
    price: 300,
    color: 'Black'
  },
  {
    id: 6,
    name: 'Classic Armchair',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1507904953637-96429a46671a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGJhY2tncm91bmR8ZW58MHwxfDB8fHwy',
    imageAlt: 'Classic armchair in a cozy corner.',
    price: 450,
    color: 'Beige'
  },
  {
    id: 7,
    name: 'Comfy Recliner',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Comfy recliner in a living room.',
    price: 550,
    color: 'Dark Blue'
  },
  {
    id: 8,
    name: 'Rustic Coffee Table',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1556597249-cd6a997737df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZ1cm5pdHVyZSUyMGJhY2tncm91bmR8ZW58MHwxfDB8fHwy',
    imageAlt: 'Rustic coffee table in a modern setting.',
    price: 350,
    color: 'Brown'
  }
];

const Products = () => {

  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (product) => {
    product.quantity = 1
    dispatch(addProduct({ ...product }));
    console.log(product)
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // hide the pop-up after 3 seconds
  };
  
  return (
    <div className="bg-white max-w-[100vw]">
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-16 lg:max-w-7xl g:px-8">
        <h2 className="text-6xl my-20 font-bold  text-center tracking-tight text-gray-900">Our Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative  h-[400px] ">
              <div className="aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="h-7 flex flex-col justify-between">
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="h-5 flex flex-col justify-between"> 
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                    <button type="button" onClick={()=>{handleClick(product)}} className=" absolute bottom-2 -right-3 py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-neutral-800 hover:bg-[#ff0] focus:outline-none focus:bg-green-100 hover:text-neutral-800 focus:text-neutral-800  disabled:opacity-50 disabled:pointer-events-none ">
                        Add to cart
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

                    </button>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className={`fixed top-20 right-0 left-0 w-[100vw] flex justify-center duration-500 z-[51] ${showPopup === true ? "top-20" : "top-[-100%]"}`}>
          <p className=' bg-[#ff0] text-neutral-800 w-fit px-4 py-1 rounded-lg'>Product added to cart!</p>
        </div>
    </div>
  );
};

export default Products;
