import '../assets/About.css'
export const About = () => {
    console.log('about')
    return (
        <div className="my-16 lg:mx-0 md:mx-16 sm:mx-3">
            <p className=" text-3xl font-bold my-10">About</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className=" p-10 shadow-2xl lg:col-start-2">
                    <p className="font-medium">
                        Color Recommenderは好きな色を見つけるwebサービスです
                    </p>
                    <div className="grid grid-cols-3">
                        <a
                            href="https://github.com/nisi0929/favorite-color-recommend"
                            className="col-start-2 w-10 mt-10 mx-auto"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/Github.png`}
                                alt="Logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
