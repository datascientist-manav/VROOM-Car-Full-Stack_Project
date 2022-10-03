package com.teamb.demo;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.SocketAddress;

import javax.activation.DataSource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;

@SpringBootApplication
public class ProjectApplication {
	public static void main(String[] args) throws IOException {
		Socket socket = new Socket();
		String localhost = "localhost";
		SocketAddress socketAddress = new InetSocketAddress(localhost, 8080);
		 //12000 are milli seconds
		SpringApplication.run(ProjectApplication.class, args);
		socket.connect(socketAddress, 300000);
	}

}
