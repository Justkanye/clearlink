import Link from "next/link";

const BrandLink = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='26'
        height='28'
        viewBox='0 0 26 28'
        fill='none'
      >
        <path
          d='M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z'
          fill='#1570EF'
        />
        <path
          d='M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z'
          fill='#53B1FD'
        />
      </svg>
      <h1 className='text-gray-900 text-2xl font-semibold'>ClearLink</h1>
    </Link>
  );
};

export default BrandLink;
