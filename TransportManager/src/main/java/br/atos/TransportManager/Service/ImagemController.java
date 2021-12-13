package br.atos.TransportManager.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import br.atos.TransportManager.Models.Imagem;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/imagem")
public class ImagemController {
	
	private final ImagemService imagemService;
	
	public ImagemController(ImagemService imagemService) {
		this.imagemService = imagemService;
	}
	
	@PostMapping
	public void createImagem  (@RequestParam ("file") MultipartFile file, @RequestParam ("id") String id) throws IllegalStateException, IOException {
		Imagem imagem = new Imagem();
		Long id2 = Long.parseLong(id);
		imagemService.createImagem(imagem, file, id2);
		imagemService.defineImagem(id2, imagem.getId());
	}
	
	@GetMapping
	public ResponseEntity<List<Imagem>> getAllImagens () {
		List<Imagem> imagens = imagemService.findAllImagens();
		return new ResponseEntity<>(imagens, HttpStatus.OK);
	}

}
