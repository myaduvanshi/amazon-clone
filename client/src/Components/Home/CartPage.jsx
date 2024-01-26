import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../app/features/cartSlice";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div class="mx-auto max-w-7xl px-2 lg:px-0">
  <div class="mx-auto max-w-2xl py-8 lg:max-w-7xl">
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Cart - {cart.length}
    </h1>
    <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
      <section
        aria-labelledby="cart-heading"
        class="rounded-lg bg-white lg:col-span-8"
      >
        <h2 id="cart-heading" class="sr-only">
          Items in your shopping cart
        </h2>
        <ul role="list" class="divide-y divide-gray-200">
          { cart.map((data)=>(
            <div class="">
            <li class="flex py-6 sm:py-6 ">
              <div class="flex-shrink-0">
                <img
                  src={data.img}
                  alt="Nike Air Force 1 07 LV8"
                  class="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                />
              </div>
              <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">
                        <a href="#" class="font-semibold text-black">
                          {data.title}
                        </a>
                      </h3>
                    </div>
                    <div class="mt-1 flex items-end">
                      <p class="text-sm font-medium text-gray-900">{data.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <div class="mb-2 flex">
              <div class="min-w-24 flex">
                <button type="button" class="h-7 w-7"
                onClick={() => dispatch(decreaseItemQuantity(data.id))}
                >
                  -
                </button>
                <input
                  type="text"
                  class="mx-1 h-7 w-9 rounded-md border text-center"
                  value={data.quantity}
                  onChange={() =>null}
                />
                <button
                  type="button"
                  class="flex h-7 w-7 items-center justify-center"
                  onClick={()=> dispatch(increaseItemQuantity(data.id))}
                >
                  +
                </button>
              </div>
              <div class="ml-6 flex text-sm">
                <button
                  type="button"
                  class="flex items-center space-x-1 px-2 py-1 pl-0"
                  onClick={() => dispatch(removeItem(data.id))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-red-500"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  <span class="text-xs font-medium text-red-500">Remove</span>
                </button>
              </div>
            </div>
          </div>
          ))

          }
          <div class="">
          </div>
        </ul>
      </section>
      <section
        aria-labelledby="summary-heading"
        class="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
      >
        <h2
          id="summary-heading"
          class=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
        >
          Price Details
        </h2>
        <div>
          <dl class=" space-y-1 px-2 py-4">
            <div class="flex items-center justify-between">
              <dt class="text-sm text-gray-800">Total Quantity</dt>
              <dd class="text-sm font-medium text-gray-900">{totalQuantity}</dd>
            </div>
            
            <div class="flex items-center justify-between border-y border-dashed py-4 ">
              <dt class="text-base font-medium text-gray-900">Total Amount</dt>
              <dd class="text-base font-medium text-gray-900">{totalPrice}</dd>
            </div>
          </dl>
        </div>
        <button
  type="button"
  class="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
>
  Go to Checkout
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="ml-2 h-4 w-4"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
</button>

      </section>
    </form>
  </div>
</div>

  );
};

export default CartPage;