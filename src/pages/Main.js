import  React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

const Main = ({navigation}) => {

	const [books, setBooks] = useState([]);

	useEffect(() => {
		AsyncStorage.getItem("books").then(data => {
			const book = JSON.parse(data);
			setBooks(book);
		})
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.toolbox}>
				<Text style={styles.title}>Lista de Leitura</Text>
				<TouchableOpacity style={styles.toolboxButton} onPress={() => { navigation.navigate("Book")}}>
					<Icon name="add" size={35} color="#fff"/>
				</TouchableOpacity>
			</View>
		
			<FlatList 
				data={books} 
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.itemButton}>
						<Text style={styles.itemText}>{item.title}</Text>
					</TouchableOpacity>
				)} 
				keyExtractor={item => item.id} 
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 5
	},
	toolbox: {
		flexDirection: "row",
		marginBottom: 5
	},
	title: {
		flex: 1,
		fontSize: 16,
		color: "#3498db"	
	},
	toolboxButton: {
		backgroundColor: "#3498db",
		width: 35,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50
	},
	itemButton: {

	},
	itemText: {
		fontSize: 16
	}
})

export default Main;