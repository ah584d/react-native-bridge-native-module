/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* Generated with the TypeScript template
* https://github.com/react-native-community/react-native-template-typescript
*
* @format
*/

import React, {useEffect, useState} from 'react';

import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Button,
	requireNativeComponent
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {ToastNativeModule, BulbNativeModule} from './CustomNativeModules';

declare const global: {HermesInternal: null | {}};

const Switch = requireNativeComponent('Switch');


const App = () => {
	useEffect(()=> {
		updateStatus();
	},[]);

	const [isOn, setIsOn] = useState<boolean>(false);

	const callToastNativeFunction = () => {
		ToastNativeModule.show('Message RN displayed in java function', 1000);
	}

	const turnOn = () => {
		BulbNativeModule.turnOn();
		updateStatus()
	}
	const turnOff = () => {
		BulbNativeModule.turnOff();
		updateStatus()
	}
	const updateStatus = () => {
		BulbNativeModule.getStatus((error, isOn) => {
			setIsOn(isOn);
		})
	}

	const renderBulb = () => (
		<View style={styles.container}>
			<Text style={{paddingBottom:10,color: 'blue', fontSize: 12}}>RN pass parameters to java function</Text>
			<Text> Bulb is {isOn ? "ON": "OFF"}</Text>
			{!isOn ? <Button onPress={turnOn} title="Turn ON " color="#FF6347" /> :
			<Button onPress={turnOff} title="Turn OFF " color="#FF6347" /> }
				<View style={styles.container}>
        		<Switch style={styles.javaBtn}  isTurnedOn={true}/>
      		</View>
		</View>
	)

	return (
	<>
		<StatusBar barStyle="dark-content" />
		<SafeAreaView>
			<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
				<Header />
				{global.HermesInternal == null ? null : (
				<View style={styles.engine}>
					<Text style={styles.footer}>Engine: Hermes</Text>
				</View>
				)}
				<View style={styles.body}>
				<Button onPress={callToastNativeFunction} title='RN button, calls java function ' />
				{renderBulb()}
				</View>
			</ScrollView>
		</SafeAreaView>
	</>
	);
	};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	javaBtn: {
		height: 100,
		width: 300,
		backgroundColor: 'yellow',
	  },
});

export default App;