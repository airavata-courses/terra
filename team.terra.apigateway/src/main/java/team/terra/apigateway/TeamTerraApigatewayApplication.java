package team.terra.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;

import team.terra.apigateway.filters.ErrorFilter;
import team.terra.apigateway.filters.PostFilter;
import team.terra.apigateway.filters.PreFilter;
import team.terra.apigateway.filters.RouteFilter;

@SpringBootApplication
@EnableZuulProxy
public class TeamTerraApigatewayApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(TeamTerraApigatewayApplication.class, args);
	}

	@Bean
	public PreFilter preFilter() {
		return new PreFilter();
	}
	@Bean
	public PostFilter postFilter() {
		return new PostFilter();
	}
	@Bean
	public ErrorFilter errorFilter() {
		return new ErrorFilter();
	}
	@Bean
	public RouteFilter routeFilter() {
		return new RouteFilter();
	}

}
