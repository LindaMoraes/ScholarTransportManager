package br.atos.TransportManager.Repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.atos.TransportManager.Models.Imagem;

public interface ImagemRepository extends JpaRepository<Imagem, Long>{
	
	@Modifying
	@Transactional
	@Query(value = "UPDATE transportmanager.imagem SET cliente_id = :idCliente WHERE id = :idImagem", nativeQuery = true)
	public void defineImagem(@Param("idCliente") Long idCliente,@Param("idImagem") Long idImagem);

}
