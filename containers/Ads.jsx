import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import { cyan100 } from 'material-ui/styles/colors';
import axios from 'axios';
import AdList from '../components/AdList.jsx';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

function Ads(props) {
	// console.log('props in ads.jsx: ', props.walmartProducts)
	let oneAd = [];
	if ( !Array.isArray(props.walmartProducts) ) {
		oneAd = [];
	} else {
		oneAd = props.walmartProducts;
	}

	// let singleProduct = oneAd.map( (product) => (
	// 	<AdList key={product.itemId} product={product} />
	// ))

	const style = { padding: '35px' };

	return (
		<Paper zDepth={1} style={style}>
			<Table fixedHeader>
		    <TableHeader
		      adjustForCheckbox={false}
		      displaySelectAll={false}
		    >
		      <TableRow>
		        <TableHeaderColumn>Related Products</TableHeaderColumn>
		      </TableRow>
		    </TableHeader>
		    	<TableBody
		        displayRowCheckbox={false}
		        showRowHover
		      >
					{oneAd.map( (product) => {
						return <AdList key={product.itemId} product={product} />
					}
					)}

      </TableBody>
			</Table>
		</Paper>
	)
}




// AdList.propTypes = {
//   walmartData: PropTypes.shape({}).isRequired,
// }; <AdList walmartData={props.walmartData}/>


// function mapStateToProps({ walmartData }) {
//   return { walmartData };
// }
// export default Ads;
function mapStateToProps({ walmartProducts }) {
  return { walmartProducts };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchMovie1, fetchMovie2, fetchProducts }, dispatch);
// }

export default connect(mapStateToProps)(Ads);
