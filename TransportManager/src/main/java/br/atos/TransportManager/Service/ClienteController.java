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
import br.atos.TransportManager.Models.Cliente;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/cliente")
public class ClienteController {
	
	private final ClienteService clienteService;
	
	public ClienteController(ClienteService clienteService) {
		this.clienteService = clienteService;
	}
	
	@GetMapping
	public ResponseEntity<List<Cliente>> getAllClientes () {
		List<Cliente> clientes = clienteService.findAllClientes();
		return new ResponseEntity<>(clientes, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Cliente> getClienteById (@PathVariable("id") Long id) {
		Cliente cliente = clienteService.findClienteById(id);
		return new ResponseEntity<>(cliente, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Cliente> addCliente(@RequestBody Cliente cliente) {
		Cliente newCliente = clienteService.addCliente(cliente);
		return new ResponseEntity<>(newCliente, HttpStatus.CREATED);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Cliente> updateCliente(@RequestBody Cliente cliente, @PathVariable("id") Long id) {
		Cliente updateCliente = clienteService.updateCliente(cliente, id);
		return new ResponseEntity<>(updateCliente, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteCliente(@PathVariable("id") Long id) {
		clienteService.deleteCliente(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	

}
