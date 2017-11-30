import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

function AdList(props) {
  let walmartData = props.product;
  console.log('walmart data in adlist!: ', walmartData)
  return (
  	<TableRow>
  		<TableRowColumn>
  			<a href={walmartData.productUrl} target="_blank">
  				<img src={walmartData.thumbnailImage} />
  			</a>
  		</TableRowColumn>
			<TableRowColumn>
				<a href={walmartData.productUrl} target="_blank">{walmartData.name}</a>
			</TableRowColumn>
		</TableRow>
  );
}


export default AdList;
