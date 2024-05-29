
const ShoeCard = ({ imgUrl, thumbnail, changeBigShoe, bigShoe }) => {
  return (
    <div className={`border-2 rounded-xl cursor-pointer ${bigShoe === imgUrl ? 'border-coral-red':'border-transparent'} max-sm:flex-1`}
        onClick={() => changeBigShoe(imgUrl)}    
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-lg max-sm:p-4">
            <img src={imgUrl} alt={thumbnail} width={127} height={103} className="object-contain" />
        </div>
    </div>
  )
}

export default ShoeCard