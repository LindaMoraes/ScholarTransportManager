package br.atos.TransportManager.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.atos.TransportManager.Exception.UserNotFoundException;
import br.atos.TransportManager.Models.Escola;
import br.atos.TransportManager.Repositories.EscolaRepository;

@Service
public class EscolaService {
	
	private EscolaRepository escolaRepository;
	
	@Autowired
	public EscolaService(EscolaRepository escolaRepository) {
		this.escolaRepository = escolaRepository;
	}
	
	public Escola addEscola(Escola escola) {
		return escolaRepository.save(escola);
	}
	
	public List<Escola> findAllEscolas() {
		return escolaRepository.findAll();
	}
	
	public Escola updateEscola(Escola escolaNova, Long id) {
		
		return escolaRepository.findById(id).map(escolaAntiga -> {
			escolaAntiga.setName(escolaNova.getName());
			escolaAntiga.setContato(escolaNova.getContato());
			escolaAntiga.setEndereco(escolaNova.getEndereco());
			Escola update = escolaRepository.save(escolaAntiga);
			return update;
			
		}).orElse(null);
	}
	
	public void deleteEscola(Long id) {
		this.escolaRepository.deleteById(id);
	}
	
	public Escola findEscolaById(Long id) {
		return escolaRepository.findEscolaById(id)
				.orElseThrow(() -> new UserNotFoundException ("A escola com ID \" + id + \" não foi encontrado"));
	}

}
