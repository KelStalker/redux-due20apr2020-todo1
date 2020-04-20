import React from 'react';
import { RootState } from '../store';
import { removeItemFromBlog, addItemToBlog } from '../store/blog/actions';

import { Blog } from '../store/blog/types';
import { Grid, Form, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface IBlogProps {
    removeItemFromBlog: typeof removeItemFromBlog,
    addItemToBlog: typeof addItemToBlog,
    items: Blog[]
}

export class BlogPost extends React.Component<IBlogProps>
{
    generateID = (): number => {
        let randomNumber: number = Math.floor(Math.random() * 1000);
        randomNumber += this.props.items.length;
        return randomNumber;
    }
    newBlogPost = (event: any) => {
        event.preventDefault();
        // Handle retrieval of form field value.
        const formField: HTMLInputElement | null = document.querySelector('[name="product-name"]');
        let formFieldValue: string = '';
        if (formField !== null) formFieldValue = formField.value;
        // Add new item to inventory.
        this.props.addItemToBlog({
            id: this.generateID(),
            blogPost: formFieldValue
        });
    }
    deleteBlogPost = (id: number) => {
        // Remove this BlogPost by the ID
        this.props.removeItemFromBlog(id);
    }
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Form onSubmit={this.newBlogPost}>
                        <Form.Field>
                            <label htmlFor="blogPost">Enter blogPost</label>
                            <Input name="blogPost" type='text' />
                        </Form.Field>
                        <Input type="submit" value="Add" />
                    </Form>
                </Grid.Row>
                <h3>BlogPost</h3>
                <ul>
                    {/* Loop through our REDUX blogPost items... */}
                    {this.props.items.map(element => (
                        <li>
                            {element.blogPost}
                            <Button
                                size='mini'
                                onClick={event => {
                                    this.newBlogPost(element.id)
                                }}>
                                &times;
                </Button>
                        </li>
                    ))}
                </ul>
            </Grid>
        );
    }
}

// Retrieve "items" from our "global" redux state.
const mapStateToProps = (state: RootState) => {
    return {
        items: state.inventory.items
    }
}

// Connect Redux and React using our values and "view!"
export default connect(
    mapStateToProps,
    { addItemToBlog, removeItemFromBlog }
)(BlogPost);