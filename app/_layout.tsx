import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons"; // Importa Ionicons
import "../global.css";

const queryClient = new QueryClient();

const RootLayout = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Drawer>
				<Drawer.Screen
					name="index"
					options={{
						drawerLabel: "Inicio",
						title: "GamesApp",
						drawerIcon: ({ color, size }) => (
							<Ionicons name="home-outline" size={size} color={color} /> // Icono de Inicio
						),
					}}
				/>
				<Drawer.Screen
					name="family/[id]"
					options={{
						drawerLabel: "Franquicias",
						title: "Franquicias",
						drawerIcon: ({ color, size }) => (
							<Ionicons name="albums-outline" size={size} color={color} /> // Icono de Franquicias
						),
					}}
				/>
			</Drawer>
		</QueryClientProvider>
	);
};

export default RootLayout;
