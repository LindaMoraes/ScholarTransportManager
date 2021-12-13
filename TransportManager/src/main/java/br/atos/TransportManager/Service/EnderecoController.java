package br.atos.TransportManager.Service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.atos.TransportManager.Models.Endereco;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/endereco")
public class EnderecoController {
	
	private final EnderecoService enderecoService;
	
	public EnderecoController(EnderecoService enderecoService) {
		this.enderecoService = enderecoService;
	}
	
	@GetMapping
	public ResponseEntity<List<Endereco>> getAllEnderecos () {
		List<Endereco> enderecos = enderecoService.findAllEnderecos();
		return new ResponseEntity<>(enderecos, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Endereco> getEnderecoById (@PathVariable("id") Long id) {
		Endereco endereco = enderecoService.findEnderecoById(id);
		return new ResponseEntity<>(endereco, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Endereco> addEndereco(@RequestBody Endereco endereco) {
		Endereco newEndereco = enderecoService.addEndereco(endereco);
		return new ResponseEntity<>(newEndereco, HttpStatus.CREATED);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Endereco> updateEndereco(@RequestBody Endereco endereco, @PathVariable("id") Long id) {
		Endereco updateEndereco = enderecoService.updateEndereco(endereco, id);
		return new ResponseEntity<>(updateEndereco, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteEndereco (@PathVariable("id") Long id) {
		enderecoService.deleteEndereco(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}























