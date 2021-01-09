import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import "D:/project/portfolio/myportfolio/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./test.styles.css";

const useStyles = makeStyles((theme) => ({
}));

const Test = () => {
    const classes = useStyles();
    return (
        <div class="container">
			<h1>Header 1</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit iusto adipisci, cupiditate animi, itaque qui aspernatur vel corrupti labore minima, excepturi ab, fuga rem dolores. Ratione sunt autem iusto aliquid.</p>
			<h2>Header 2</h2>
				<p>
				  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit iusto adipisci, cupiditate animi, itaque qui aspernatur vel corrupti labore minima, excepturi ab, fuga rem dolores. Ratione sunt autem iusto aliquid.
				</p> 
			<ul>
			  <li>List Item 1</li>
			  	<ul>
			  		<li>embedded list item 1</li>
			  		<li>embedded list item 2</li>
				</ul>
			  <li>List Item 2</li>
			  <li>List Item 3</li>
			</ul>
			 
			<ol>
			  <li>List Item 1</li>
			  <li>List Item 2</li>
			  <li>List Item 3</li>
			</ol>
	</div>
    );
};

export default Test;
