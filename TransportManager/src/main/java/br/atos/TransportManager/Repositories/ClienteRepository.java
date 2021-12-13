package br.atos.TransportManager.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.atos.TransportManager.Models.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	
	Optional<Cliente> findClienteById(Long id);
}
