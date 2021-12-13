package br.atos.TransportManager.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;


import br.atos.TransportManager.Models.User;
import br.atos.TransportManager.Repositories.UserRepository;


@Repository
public class CustomUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user = userRepository.findByUsername(username);
		
		if(user == null ) {
			throw new UsernameNotFoundException("Usuário Não Encontrado!");
		}
		
		return user;
	}

}


