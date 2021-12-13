package br.atos.TransportManager.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.atos.TransportManager.Models.Escola;

public interface EscolaRepository extends JpaRepository<Escola, Long> {
	
	Optional<Escola> findEscolaById(Long id);
}
