package br.atos.TransportManager.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.atos.TransportManager.Exception.UserNotFoundException;
import br.atos.TransportManager.Models.Cliente;
import br.atos.TransportManager.Repositories.ClienteRepository;

@Service
public class ClienteService {
	
	private final ClienteRepository clienteRepository;
	
	@Autowired
	public ClienteService(ClienteRepository clienteRepository) {
		this.clienteRepository = clienteRepository;
	}
	
	public Cliente addCliente(Cliente client) {
	//	client.setClienteCode(UUID.randomUUID().toString());
		return clienteRepository.save(client);
	}
	
	public List<Cliente> findAllClientes() {
		return clienteRepository.findAll();
	}
	
	public Cliente updateCliente(Cliente clienteNovo, Long id) {
		return clienteRepository.findById(id).map(clienteAntigo -> {
			clienteAntigo.setName(clienteNovo.getName());
			clienteAntigo.setEmail(clienteNovo.getEmail());
			clienteAntigo.setPhone(clienteNovo.getPhone());
			clienteAntigo.setEndereco(clienteNovo.getEndereco());
			clienteAntigo.setEscola(clienteNovo.getEscola());
			Cliente update = clienteRepository.save(clienteAntigo);
			return update;				
		}).orElse(null);
	}
	
	public void deleteCliente(Long id) {
		this.clienteRepository.deleteById(id);
	}
	
	public Cliente findClienteById(Long id) {
		return clienteRepository.findClienteById(id)
				.orElseThrow(() -> new UserNotFoundException ("O cliente com ID " + id + " não foi encontrado"));
	}

		
}
