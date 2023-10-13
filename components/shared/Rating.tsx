import { MdStarHalf, MdStar, MdStarOutline } from "react-icons/md";

const Rating = ({ rating }: RatingProps) => {
  const _rating = Math.round(rating * 2) / 2;
  return (
    <div className='flex gap-[5px] text-yellow-400 text-xl'>
      {Array.from([1, 2, 3, 4, 5]).map(i => {
        if (i <= _rating) return <MdStar key={i} />;
        else if (i - 0.5 === _rating) return <MdStarHalf key={i} />;
        else return <MdStarOutline key={i} />;
      })}
    </div>
  );
};

export default Rating;

type RatingProps = {
  rating: number;
};
