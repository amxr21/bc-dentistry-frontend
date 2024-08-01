const Progress = ({progressName}) => {
    return (
        <div className="section-name flex gap-x-4 items-center">
            <div className="number w-12 h-12 rounded-full bg-[#000834] border border-white"></div>
            <div className="name text-xl font-bold">{progressName}</div>
        </div>
    )
}

export default Progress;