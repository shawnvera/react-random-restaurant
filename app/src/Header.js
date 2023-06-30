import NavBar from "./NavBar.js"


export default function Header() {
    return (
        <>
            <div className="container-flex">
                <div className="row">
                    <div className="col text-center">
                        <p className="text-center text-bg-primary">Lex.Eat.with(friends)</p>
                        <img height="200" width="225" src="https://cdn.pixabay.com/photo/2017/11/11/20/19/dinner-table-2940339_1280.png" alt="friends at a dinner table on their phones" />
                    </div>
                </div>
            </div>

            <NavBar />
            
        </>

        
    )
}
