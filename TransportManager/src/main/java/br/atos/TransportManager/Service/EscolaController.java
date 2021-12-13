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

import br.atos.TransportManager.Models.Escola;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/escola")
public class EscolaController {
	
	private final EscolaService escolaService;
	
	public EscolaController(EscolaService escolaService) {
		this.escolaService = escolaService;
	}
	
	@GetMapping
	public ResponseEntity<List<Escola>> getAllEscolas () {
		List<Escola> escolas = escolaService.findAllEscolas();
		return new ResponseEntity<>(escolas, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Escola> getEscolaById (@PathVariable("id") Long id) {
		Escola escola = escolaService.findEscolaById(id);
		return new ResponseEntity<>(escola, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Escola> addEscola(@RequestBody Escola escola) {
		Escola newEscola = escolaService.addEscola(escola);
		return new ResponseEntity<>(newEscola, HttpStatus.CREATED);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Escola> updateEscola(@RequestBody Escola escola, @PathVariable("id") Long id){
		Escola updateEscola = escolaService.updateEscola(escola, id);
		return new ResponseEntity<>(updateEscola, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteEscola(@PathVariable("id") Long id) {
		escolaService.deleteEscola(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}

