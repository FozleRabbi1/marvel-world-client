import "./kids.css"
const Kidex = () => {
    return (
        <div className="py-10 md:py-32 bg-slate-200">
             <h2 className='text-center font-mono text-3xl font-bold py-5 -mt-8 mb-8'> Customers </h2>

            <div className="maildiv grid md:grid-cols-4 gap-10 w-11/12 mx-auto justify-center">
                <img src="https://cdn10.bestreviews.com/images/v4desktop/image-full-page-cb/image-1-71c5bc.jpg?p=w1228" alt="" />
                <img src="https://static-01.daraz.pk/p/a75be42681d2043870b69e6322668514.jpg" alt="" />
                <img src="https://m.media-amazon.com/images/I/81h38tZxY3L._AC_SX425_.jpg" alt="" />
                <img src="https://m.media-amazon.com/images/I/81tQarUO9KL.jpg" alt="" />
            </div>
            
        </div>
    );
};

export default Kidex;