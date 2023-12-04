export default function Navbar() {
    return (
        <div class="navbar navbar-center bg-color bg-gradient-to-b from-gray-400">
            <div className="flex-1">
               <a href="https://t.me/johndoe12334" className="btn btn-ghost text-xl text-xl">
                    <img className="w-10 rounded-full" alt="navbar" src="https://i.ibb.co/tbpDnJk/photo-2023-09-29-00-40-20.jpg" />
                    <p>0xjohndoe</p>
                </a>
            </div>
            <div className="flex-none">
               <a className="btn btn-outline btn-ghost mr-5">About me</a>
               <a className="btn btn-outline btn-ghost mr-5">About my stack</a>
               <a className="btn btn-outline btn-ghost">About my projects</a>
            </div>
        </div>
    )
}