const renderError = ({ isError }) => {
    if (isError) {
        return (
            <div
                className="alert alert-primary alert-dismissible fade show"
                role="alert"
            >
                Unable to get Gifs, please try again in a few minutes
            </div>
        );
    }
};
export default renderError;
