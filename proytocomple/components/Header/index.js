
import Link from "next/link";
const index = () => {
    return (
        <header className="flex items-center justify-between ">
            <Link href={"/"} className="text-red-600 text-2xl font-semibold">&#127789; Mr. Tocomple</Link>
            <nav className="flex gap-8 items-center text-gray-600 font-semibold">
                <span className="material-symbols-outlined">Home</span>
                <Link href={"/"} className="">Home</Link>
                <Link href={"/"} className="">Productos</Link>
                <Link href={"/"} className="">Servicios</Link>
                <Link href={"/"} className="align-middle">Contacto</Link>
            </nav>
            <div>
            <Link href={"/login"} className="bg-red-600 text-white rounded-full px-5 py-1">Login</Link>
            <Link href={"/registro"} className="bg-red-600 text-white rounded-full px-5 py-1">Registrarse</Link>
            </div>
        </header>
    )
}

export default index