import React, { useRef} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

let data=[
	{id: 0,paid: 'No', date: '02/21/2021', title: 'Medical Bill', amount:'$50'},
	{id: 1,paid: 'Yes', date: '02/21/2021', title: 'Gas', amount:'$20'},
	{id: 2,paid: 'No', date: '02/21/2021', title: 'Car Bill', amount:'$350'},
	{id: 3,paid: 'No', date: '02/21/2021', title: 'Car Bill', amount:'$350'},
	{id: 4,paid: 'No', date: '02/21/2021', title: 'Car Bill', amount:'$350'},
	{id: 5,paid: 'No', date: '02/21/2021', title: 'Car Bill', amount:'$350'},
]

const Expenses = () => {
	return (
	<SafeAreaView >
	  <View >
		<View style={styles.head}>
		  <Text style={styles.headText}>Paid</Text>
		  <Text style={styles.headText}>Date</Text>
		  <Text style={styles.headText}>Title</Text>
		  <Text style={styles.headText}>Amount</Text>
		</View>
		<FlatList
			data={data}
			renderItem={({ item }) => {
				return(<TouchableOpacity style={styles.rowCard}>
					<Text>{item.paid}</Text>
					<Text>{item.date}</Text>
					<Text>{item.title}</Text>
					<Text>{item.amount}</Text>
				</TouchableOpacity>	)
			}}
			keyExtractor={item => item.id}
		/>
	  </View>
	</SafeAreaView>
	);
}
export default Expenses;
  
const styles = StyleSheet.create({
head: {
	flexDirection: 'row',
	justifyContent: 'space-around'
},
headText: {
	fontSize: 15,
	fontWeight: 'bold'
},
rowCard: {
	height: 50,
	borderWidth: 2,
	borderBottomLeftRadius: 10,
	borderTopRightRadius: 10,
	margin: 5,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-around',	
	
},

});