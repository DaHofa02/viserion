## do this to restor SSH on an Proxmox unprivileged Ubuntu Container

echo -e "cd /run/\nmkdir sshd\nservice sshd restart\ncd ~/" >> startssh.sh

chmod +x startssh.sh

crontab -e

@reboot /root/startssh.sh
