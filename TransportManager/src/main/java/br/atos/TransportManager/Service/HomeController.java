package br.atos.TransportManager.Service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	
	@GetMapping("/home")
	public String admin() {
		
		return "Painel administrativo";
	}

}
