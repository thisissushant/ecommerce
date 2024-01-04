import React from "react";
import products from "./Data";

export default function Shop() {
  return (
    <>
      <div className=" bg-gradient-to-r from-zinc-200 from-10% via-amber-100 via-30% to-zinc-400 to-90%">
        <h2 className="grid justify-items-center py-4  text-4xl">Products</h2>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8 py-4">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-64 w-full rounded-lg object-cover object-center group-hover:opacity-75 "
                  />
                </div>

                <h3 className="mt-4 text-sm text-black">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-black">
                  {product.price}
                </p>
                <div className="flex flex-col space-y-2 md:flex-row-reverse md:space-x-2 md:space-y-0 md:flex-col ">
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Add to Cart
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
