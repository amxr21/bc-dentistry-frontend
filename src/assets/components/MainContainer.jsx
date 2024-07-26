const MainContainer = ({Id, children, classes}) => {
    return (
        <div id={Id} className={`grid grid-cols-12 mt-32 px-12 gap-x-8 ${classes}`}>
            {children}
        </div>
    )
}

export default MainContainer;