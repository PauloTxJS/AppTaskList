import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Book = ({navigation}) => {
	
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [photo, setPhoto] = useState();

	const onSave = () => {
		console.warn(`Title = ${title}`);
		console.warn(`Description = ${description}`);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.pageTitle}>Inclua seu novo livro...</Text>

			<TextInput 
				style={styles.input} 
				placeholder="Título"
				value={title}
				onChangeText={(text) => {
					setTitle(text);
				}}
      		/>

			<TextInput 
				style={styles.input} 
				placeholder="Descrição"
				multiline={true}
				numberOfLines={4}
				value={description}
				onChangeText={(text) => {
					setDescription(text);
				}}
      		/>

			<TouchableOpacity style={styles.cameraButton}>
				<Icon name="camera-alt" size={18} color="#fff"/>
			</TouchableOpacity>

			<TouchableOpacity style={styles.saveButton} onPress={onSave}>
				<Text style={styles.saveButtonText}>Cadastrar</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.cancelButton} onPress={() => {navigation.goBack()}}>
				<Text style={styles.cancelButtonText}>Cancelar</Text>
			</TouchableOpacity>
		</View>	
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding:10,
	},
	pageTitle: {
		textAlign: "center",
		fontSize: 16,
		marginBottom: 20
	}, 
	input: {
		fontSize: 16,
		borderBottomColor: "#f39c12",
		borderBottomWidth: 1,
		marginBottom: 10
	},
	cameraButton: {
		backgroundColor: "#f39c12",
		width: 32,
		height: 32,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		marginBottom: 20
	}, 
	saveButton: {
		backgroundColor: "#f39c12",
		alignSelf: "center",
		padding: 10,
		borderRadius: 8,
		marginBottom: 20
	},
	saveButtonText: {
		fontSize: 16,
		color: "#fff"
	},
	cancelButton: {	
		alignSelf: "center",
	},
	cancelButtonText: {
		fontSize: 16,
		color: "#95a5a6"
	}
});

export default Book;