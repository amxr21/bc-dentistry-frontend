const UserType = ({type}) => {
    const t = {
        Doctor: 'Dr',
        Admin: 'A',
    }
    return(
        <div id="UserType" className="flex items-center gap-x-4 py-2 px-3 rounded-md border">
            <div className="pfp flex items-center justify-center w-9 h-9 bg-blue-950 rounded-md text-white">
                {t[type]}
            </div>
            <h2 className="w-32 ">Welcome back, <span className="font-bold">{t[type]}. </span></h2>
        </div>
    )
}

export default UserType;