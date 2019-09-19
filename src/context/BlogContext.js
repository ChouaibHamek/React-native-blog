import createDataContext from './createDataContext';

const blogsReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, {
                id: Math.floor(Math.random() * 9999999),
                title: `Blog post #${state.length + 1}`
            }];
        case 'DELETE':
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return () => dispatch({ type: 'ADD' });
}

const deleteBlogPost = dispatch => {
    return (id) => dispatch({ type: 'DELETE', payload: id });
}

export const { Context, Provider } = createDataContext(blogsReducer, {
    addBlogPost,
    deleteBlogPost
}, []);