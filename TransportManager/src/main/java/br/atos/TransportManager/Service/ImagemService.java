package br.atos.TransportManager.Service;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import br.atos.TransportManager.Models.Imagem;
import br.atos.TransportManager.Repositories.ImagemRepository;

@Service
public class ImagemService {
	
	
	private final ImagemRepository imagemRepository;
	
	@Autowired
	public ImagemService(ImagemRepository imagemRepository) {
		this.imagemRepository = imagemRepository;
	}
	
	public List<Imagem> findAllImagens() {
		return imagemRepository.findAll();
	}

	public void createImagem(Imagem imagem, MultipartFile file, Long id2) throws IllegalStateException, IOException {
		String cliente =  id2.toString();
		new File ("C:\\Users\\linda\\OneDrive\\Documentos\\Engenharia\\Estudo\\Curso_Atos\\Meus Projetos\\transportapp\\src\\assets\\imagem-cliente\\" + cliente).mkdirs();
		file.transferTo(new File ("C:\\Users\\linda\\OneDrive\\Documentos\\Engenharia\\Estudo\\Curso_Atos\\Meus Projetos\\transportapp\\src\\assets\\imagem-cliente\\" + cliente + "\\" + file.getOriginalFilename()));
		imagem.setUrl("../../assets/imagem-cliente/" + cliente + "/" + file.getOriginalFilename());
		imagemRepository.save(imagem);
				
	}
	
	public void defineImagem(Long idCliente, Long idImagem) {
		imagemRepository.defineImagem(idCliente, idImagem);
	}
	
	

}
