const Form = (props) => {
    return (
        <form className="form-inline justify-content-center m-2">
            <input
                value={props.search}
                onChange={props.handleSearchChange}
                type="text"
                placeholder="search"
                className="form-control"
            />
            <button
                onClick={props.handleSubmit}
                type="submit"
                className="btn btn-primary mx-2"
            >
                Search
            </button>
        </form>
    );
};

export default Form;
