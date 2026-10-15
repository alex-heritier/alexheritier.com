.PHONY: login sync

HOST = aheritier_alexheritier@ssh.nyc1.nearlyfreespeech.net
FILES = index.html resume.html favicon.ico css/main.css \
	resources/img/headshot-small.webp resources/alex-heritier-resume.pdf

login:
	ssh $(HOST)

# Make files world-readable first: -a copies permissions to the server, and
# macOS's built-in rsync (openrsync) has no --chmod. -R keeps css/, resources/.
sync:
	rsync -avR $(FILES) $(HOST):/home/public/
