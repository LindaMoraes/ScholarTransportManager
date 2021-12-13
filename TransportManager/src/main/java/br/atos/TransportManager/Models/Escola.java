package br.atos.TransportManager.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Escola {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, updatable = false)
	private Long id;
	private String name;
	private String contato;
	
	@ManyToOne
	private Endereco endereco;

	public Escola(Long id, String name, String contato, Endereco endereco) {
		super();
		this.id = id;
		this.name = name;
		this.contato = contato;
		this.endereco = endereco;
	}
	
	public Escola() {};

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContato() {
		return contato;
	}

	public void setContato(String contato) {
		this.contato = contato;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	@Override
	public String toString() {
		return "Escola [id=" + id + ", name=" + name + ", contato=" + contato + ", endereco=" + endereco + "]";
	}
	
	
	
	

}
