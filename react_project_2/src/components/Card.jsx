const Card = ()=>{

    return (

        <>
            <div className="card w-96 bg-base-100 shadow-xl mr-2 mt-2">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title font-bold">Card Title With DaisyUI</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Card;