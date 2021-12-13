package br.atos.TransportManager.Service;

import java.util.List;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.atos.TransportManager.Exception.UserNotFoundException;
import br.atos.TransportManager.Models.User;

import br.atos.TransportManager.Repositories.UserRepository;

@Service
public class UserService {
	
	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	private final UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	public User addUser(User user) {
		
		user.setPassword(encoder.encode(user.getPassword()));
		
		return userRepository.save(user);
	}
	
	public List<User> findAllUser() {
		return userRepository.findAll();
	}
	
	public User findUserById(Long id) {
		return userRepository.findById(id)
				.orElseThrow(() -> new UserNotFoundException ("O user com ID " + id + " não foi encontrado"));
	}

	public User loadUser(String username) {
		
		return userRepository.findByUsername(username);
	}


}
