import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
        {
        original: 'images/cheddar-jalapeno-bagel.jpg',
        thumbnail: 'images/cheddar-jalapeno-bagel.jpg',
        description: `Golden cheddar and jalapeno bagels cooling on a black cooling rack.`,
        originalHeight: '450px',
        },

        {
        original: 'images/clink-hawks-9ers.jpg',
        thumbnail: 'images/clink-hawks-9ers.jpg',
        description: `Seattle Seahawks playing the San Francisco 49ers in 2015 at the Century Link Stadium in Seattle.`,
        originalHeight: '450px',
        },

        {
        original: 'images/diamond-head-view.jpg',
        thumbnail: 'images/diamond-head-view.jpg',
        description: `View of the Pacific Ocean and neighborhoods in Honolulu from the summit of Diamond Head in Honolulu, Hawaii.`,
        originalHeight: '450px',
        },

        {
        original: 'images/elephant-by-the-water.jpg',
        thumbnail: 'images/elephant-by-the-water.jpg',
        description: `A young elephant by a pond of crystal blue water.`,
        originalHeight: '450px',
        },

        {
        original: 'images/tent-in-the-trees.jpg',
        thumbnail: 'images/tent-in-the-trees.jpg',
        description: `A gray and orange tent nestled in the trees.`,
        originalHeight: '450px',
        },

        {
        original: 'images/code-heap-size-python.png',
        thumbnail: 'images/code-heap-size-python.png',
        description: `Python code to get the size of a heap.`,
        originalHeight: '450px',
        },

        {
        original: 'images/figma-project.png',
        thumbnail: 'images/figma-project.png',
        description: `A prototype created in Figma, showcasing the login page of the app when viewed from an iPhone.`,
        originalHeight: '450px',
        },

        {
        original: 'images/hashmap-output-python.png',
        thumbnail: 'images/hashmap-output-python.png',
        description: `Output from a hashmap coded using Python.`,
        originalHeight: '450px',
        },

        {
        original: 'images/mancala-output-python.png',
        thumbnail: 'images/mancala-output-python.png',
        description: `Output from a game of Mancala coded using Python.`,
        originalHeight: '450px',
        },

        {
        original: 'images/puzzle-output-python.png',
        thumbnail: 'images/puzzle-output-python.png',
        description: `Output from a puzzle coded using Python.`,
        originalHeight: '450px',
        },
];

    function GalleryPage() {

        return (
            <>
                <h2>Gallery</h2>
                <article>

                    <ImageGallery items={images} />

                </article>
            </>

            );

    }
    export default GalleryPage;
