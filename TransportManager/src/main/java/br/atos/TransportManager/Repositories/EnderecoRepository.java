package br.atos.TransportManager.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.atos.TransportManager.Models.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Long>{

	Optional<Endereco> findEnderecoById(Long id);

}
