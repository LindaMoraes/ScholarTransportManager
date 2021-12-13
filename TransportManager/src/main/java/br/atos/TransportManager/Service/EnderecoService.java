package br.atos.TransportManager.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.atos.TransportManager.Exception.UserNotFoundException;
import br.atos.TransportManager.Models.Endereco;
import br.atos.TransportManager.Repositories.EnderecoRepository;

@Service
public class EnderecoService {
	
	private final EnderecoRepository enderecoRepository;
	
	@Autowired
	public EnderecoService(EnderecoRepository enderecoRepository) {
		this.enderecoRepository = enderecoRepository;
	}
	
	public Endereco addEndereco(Endereco endereco) {
		return enderecoRepository.save(endereco);
	}
	
	public List<Endereco> findAllEnderecos() {
		return enderecoRepository.findAll();
	}
	
	public Endereco updateEndereco(Endereco enderecoNovo, Long id) {
		return enderecoRepository.findById(id).map(enderecoAntigo -> {
			enderecoAntigo.setCidade(enderecoNovo.getCidade());
			enderecoAntigo.setBairro(enderecoNovo.getBairro());
			enderecoAntigo.setRua(enderecoNovo.getRua());
			enderecoAntigo.setNumero(enderecoNovo.getNumero());
			Endereco update = enderecoRepository.save(enderecoAntigo);
			return update;				
		}).orElse(null);
	}
	
	public void deleteEndereco(Long id) {
		this.enderecoRepository.deleteById(id);
	}
	
	public Endereco findEnderecoById(Long id) {
		return enderecoRepository.findEnderecoById(id)
				.orElseThrow(() -> new UserNotFoundException ("O endereco com ID " + id + " não foi encontrado"));
	}

}
